import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    searchFilterTextChange,
    searchFilterStatusChange,
    searchFilterPiorityChange,
} from "../redux/actions";

const { Search } = Input;

export default function Filters() {
    const [searchText, setSearchText] = useState();
    const [searchStatus, setStatus] = useState("All");
    const [piority, setPiority] = useState([]);

    const dispatch = useDispatch();

    const handleSubmitSearchText = (e) => {
        setSearchText(e.target.value);
        dispatch(searchFilterTextChange(e.target.value));
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        dispatch(searchFilterStatusChange(e.target.value));
    };

    const handlePiorityChange = (e) => {
        setPiority(e);
        dispatch(searchFilterPiorityChange(e));
    };

    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder="input search text"
                    value={searchText}
                    onChange={handleSubmitSearchText}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={searchStatus} onChange={handleStatusChange}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: "100%" }}
                    value={piority}
                    onChange={handlePiorityChange}
                >
                    <Select.Option value="High" label="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}
