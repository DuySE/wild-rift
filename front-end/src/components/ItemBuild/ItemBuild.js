import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'antd/dist/antd.css';
import {Card, Layout} from 'antd';
import { Row, Col } from 'antd';
import { Descriptions, Badge } from 'antd';

const { Header, Content } = Layout;
const { Meta } = Card;

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    width: 80,
    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    display: 'inline',
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});


class ItemBuild extends Component {
    componentDidMount() {
        this.props.handleGetList()
    }

    state = {
        data: {
            'item_physical': [
                {'id': '100', 'content': 'content 100', 'image_url': 'https://cdn-images.win.gg/news/d1359f9934ee5a75ed441ffce412a0a1/da9343c3e2e4cdc121b220fbd84e37d6/original.png'},
                {'id': '101', 'content': 'content 101', 'image_url': 'https://static.wikia.nocookie.net/leagueoflegends/images/1/14/Maw_of_Malmortius_item.png/revision/latest?cb=20201104235705'}
             ],
            'item_magic': [
                {'id': '200', 'content': 'content 200', 'image_url': 'https://cdn-images.win.gg/news/d1359f9934ee5a75ed441ffce412a0a1/db52d5b965e38a07edeac144421e8b4a/original.png'},
                {'id': '201', 'content': 'content 201', 'image_url': 'https://cdn-images.win.gg/news/d1359f9934ee5a75ed441ffce412a0a1/2f51b1457374d4357c78ab68d8088ba9/original.png'}
             ],
            'item_armor': [{'id': '300', 'content': 'content 300', 'image_url': ''}],
            'item_boot': [{'id': '400', 'content': 'content 400', 'image_url': ''}],
            'item_pool': []
        }
    };

    getList = id =>  this.state.data[id];

    ignore_change = [
        'item_physical', 'item_magic'
    ];


    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let new_data = this.state.data;

            // if (!this.ignore_change.includes(source.droppableId))
                new_data[source.droppableId] = items;

            this.setState({
                data: new_data
            });

        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            let new_data = this.state.data;

            // if (!this.ignore_change.includes(source.droppableId))
                new_data[source.droppableId] = result[source.droppableId];

            // if (!this.ignore_change.includes(destination.droppableId))
                new_data[destination.droppableId] = result[destination.droppableId];

            this.setState({
                data: new_data
            });
        }
    };


    render() {
        const { list_items } = this.props;

        return (
            <Layout>
                <Header>
                    <h1><font color="white"> Wild Rift Item Build</font></h1>
                </Header>

                <Content>
                <Row>
                    <Col span={15}>
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >

                    <h3>Build Item:</h3>
                    <Droppable droppableId="item_pool" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                            >
                                <Row style={{ paddingLeft: 10, height: 90}} span={12} gutter={[12, 12]}>
                                    {
                                        this.getList("item_pool").map((item, index) => (
                                            <Col span={2} >
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}
                                                        >
                                                            <img src={item.image_url} alt={item.content} width="50" height="50"/>
                                                        </div>

                                                    )}
                                                </Draggable>
                                            </Col>
                                        ))
                                    }
                                    {provided.placeholder}
                                </Row>
                            </div>
                        )}
                    </Droppable>


                    <h3>Physical Item:</h3>
                    <Droppable droppableId="item_physical" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                            >
                            <Row style={{ paddingLeft: 10, height: 90}} span={12} gutter={[12, 12]}>
                                {
                                    this.getList("item_physical").map((item, index) => (
                                        <Col span={2} >
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >
                                                    <img src={item.image_url} alt={item.content} width="50" height="50"/>
                                                </div>

                                            )}
                                        </Draggable>
                                        </Col>
                                    ))
                                }
                                {provided.placeholder}
                            </Row>
                            </div>
                        )}
                    </Droppable>

                    <h3>Magical Item:</h3>
                    <Droppable droppableId="item_magic" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                            >
                                <Row style={{ paddingLeft: 10, height: 90}} span={12} gutter={[12, 12]}>
                                    {
                                        list_items && list_items.filter(item => item.type === "item_magic").map((item, index) => (
                                            <Col span={2} >
                                                <Draggable
                                                    key={item._id}
                                                    draggableId={item._id}
                                                    index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}
                                                        >
                                                            <img src={item.image_url} alt={item.content} width="50" height="50"/>
                                                        </div>

                                                    )}
                                                </Draggable>
                                            </Col>
                                        ))
                                    }
                                    {provided.placeholder}
                                </Row>
                            </div>
                        )}
                    </Droppable>

                </DragDropContext>
                    </Col>
                    <Col span={8} style={{marginLeft: 20}}>
                        <Descriptions title="Build Info" bordered>
                            <Descriptions.Item label="General Info">
                                Gold: <strong> 4137 </strong>
                                <br />
                                Version: 3.4
                                <br />
                            </Descriptions.Item>
                        </Descriptions>

                    </Col>
                </Row>

                </Content>
            </Layout>
        )

    }
}

export default withRouter(ItemBuild)
