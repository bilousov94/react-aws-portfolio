import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import { awsSkills } from '../mock/aws-skills-list';
import SkillBubble from './partials/SkillBubble';

import Title from './partials/Title';

const TestSkills = () => {

    const [rows, addRow] = useState([]);

    useEffect(() => {
        const skills = awsSkills;

        while (skills.length > 0) {
            addRow(rows.push(skills.splice(0,3)))
        }
        addRow([...rows]);
    }, []);

    return (
        <section id="test-skills">
            <Container>
                <div className="project-wrapper">
                    <Title title="Test my skills" />
                    <div className="skills-content">

                            { (rows.length) ?
                                rows.map((row, index) => {
                                    return (
                                        <Fade
                                            bottom
                                            duration={1000}
                                            delay={500 + (index*150)}
                                            distance="30px"
                                            key={index}
                                        >
                                            <Row className="row-margin">
                                                {
                                                    row.map(skill => {
                                                        return (
                                                            <SkillBubble key={skill.id} skill={skill}/>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Fade>
                                    )
                                }) : null
                            }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TestSkills;