import React from 'react';
import { Row, Col } from 'antd';

export default function useStatisticsRenderer(nullPercent: number) {
    const statisticsRenderer = () => {
        return (
            <>
                <Row>
                    <Col span={12}>Null Percentage</Col>
                    <Col span={12}>{nullPercent}%</Col>
                </Row>
            </>
        );
    };
    return statisticsRenderer;
}
