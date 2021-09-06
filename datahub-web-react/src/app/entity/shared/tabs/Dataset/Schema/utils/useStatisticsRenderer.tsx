import React from 'react';
import { Row, Col } from 'antd';

export default function useStatisticsRenderer() {
    const nullPercent = Math.floor(Math.random() * (99 - 1 + 1) + 1);
    const maxValue = Math.random().toFixed(2);
    const minValue = (Number(maxValue) * Math.random()).toFixed(2);

    const statisticsRenderer = () => {
        return (
            <>
                <Row>
                    <Col span={12}>Null Percentage</Col>
                    <Col span={12}>{nullPercent}%</Col>
                </Row>
                <Row>
                    <Col span={12}>Maximum</Col>
                    <Col span={12}>{maxValue}</Col>
                </Row>
                <Row>
                    <Col span={12}>Minimum</Col>
                    <Col span={12}>{minValue}</Col>
                </Row>
            </>
        );
    };
    return statisticsRenderer;
}
