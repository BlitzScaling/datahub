import { Statistic } from 'antd';
import React from 'react';
import styled from 'styled-components';

import { SidebarHeader } from './SidebarHeader';
import { getRelativeTime } from '../../../../../shared/time/timeUtils';

const ScoreContainer = styled.div`
    margin-bottom: 8px;
`;

export const SidebarOverviewSection = () => {
    const qualityScore = Math.floor(Math.random() * (99 - 85 + 1) + 85);
    const freshness = getRelativeTime(Math.floor(Math.random() * (86400 * 2 - 1 + 1) + 1));
    return (
        <div>
            <SidebarHeader title="Overview" />
            <ScoreContainer>
                {qualityScore > 90 ? (
                    <Statistic
                        title="Data Quality Score"
                        value={qualityScore}
                        suffix=" / 100"
                        valueStyle={{ color: '#3f8600' }}
                    />
                ) : (
                    <Statistic
                        title="Data Quality Score"
                        value={qualityScore}
                        suffix=" / 100"
                        valueStyle={{ color: '#cf1322' }}
                    />
                )}
                <p>Data Freshness: {freshness}</p>
            </ScoreContainer>
        </div>
    );
};
