import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

import { TweenOneGroup } from 'rc-tween-one';


const pointPos = [
    { x: -90, y: -20 },
    { x: 35, y: -25 },
    { x: -120, y: 125 },
    { x: -100, y: 165 },
    { x: 95, y: -5 },
    { x: 90, y: 160, opacity: 0.2 },
    { x: 110, y: 50 },
];

const SkillBubble = ({ skill }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, []);

    const [bubbles, setBubbles] = React.useState(false);

    const showBubbles = () => {
        setBubbles(true);
    };

    const hideBubbles = () => {
        setBubbles(false);
    };

    const pointChild = [
        'point-ring left', 'point-ring point-ring-0 right',
        'point-0', 'point-2', 'point-1', 'point-3', 'point-2',
    ].map((className, ii) => (
        <i
            className={className}
            key={ii.toString()}
        />
    ));

    const getEnter = (e) => {
        const i = e.index;
        const r = (Math.random() * 2) - 1;
        const y = (Math.random() * 10) + 5;
        const delay = Math.round(Math.random() * (i * 30));
        return [
            {
                delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
            },
            {
                y: r > 0 ? `+=${y}` : `-=${y}`,
                duration: (Math.random() * 1000) + 2000,
                yoyo: true,
                repeat: -1,
            }];
    };

    return (
        <Col md={4} xs={12} className="skill-bubble__item">
            <div
                className="skill-bubble__item-link"
                onMouseEnter={showBubbles}
                onMouseLeave={hideBubbles}
            >
                <TweenOneGroup
                    enter={getEnter}
                    leave={{
                        x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack',
                    }}
                    resetStyle={false}
                    exclusive
                    className="point-wrapper"
                >
                    {(bubbles || isMobile) && pointChild}
                    </TweenOneGroup>

                <div className="skill-bubble__item-img">
                    <img src={skill.img} alt="img" />
                </div>
                <div className="skill-bubble__item-title">
                    {skill.title}
                </div>
            </div>
        </Col>
    );
};

export default SkillBubble;