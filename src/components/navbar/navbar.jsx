import React, { useState } from 'react';
import './index.css'; // Import the CSS file for the navbar styling
import { Button, Tooltip, Switch } from "antd"
import { Link, animateScroll as scroll } from 'react-scroll';
import { MenuOutlined, LinkedinOutlined, GithubOutlined, MailOutlined, ContactsOutlined, ProjectOutlined, UserOutlined, SolutionOutlined, CloseOutlined } from '@ant-design/icons';
import { BsSunFill, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import cv from '../..//bobii.pdf'
function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const [isResume, setIsResume] = useState(false)
    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const scrollToProjects = () => {
        scroll.scrollTo(500); // Replace 100 with the desired scroll position or element's position
    };
    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <MenuOutlined className='logo-menu' onClick={toggleCollapse} />
                </div>

                <div className="navbar-menu">
                    <a className='a-child' href='https://www.linkedin.com/in/bobybewa/' target='blank'>
                        <LinkedinOutlined className='icon-menu' />
                    </a>
                    <a className='a-child' href='https://github.com/bobybewa' target='blank'>
                        <GithubOutlined className='icon-menu' />
                    </a>
                    <Tooltip placement="right" title="bobybewa6@gmail.com">
                        <a className='a-child'>
                            <MailOutlined className='icon-menu' />
                        </a>
                    </Tooltip>
                </div>

                <div className="">
                    <Switch
                    style={{display : 'none'}}
                        checkedChildren={<BsSunFill />}
                        unCheckedChildren={<BsFillMoonStarsFill />}
                    />
                </div>
            </div>
            <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <ul>
                    <li>
                        <Tooltip placement="right" title="Profile">
                            <UserOutlined className='icon-menu-collapse' />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip placement="right" title="Projects">
                            <ProjectOutlined onClick={scrollToProjects} className='icon-menu-collapse' />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip placement="right" title="Resume">
                            <a href={cv} className='a-child' download>
                                <SolutionOutlined className='icon-menu-collapse' />
                            </a>
                        </Tooltip>
                    </li>
                    {/* <li>
                        <Tooltip placement="right" title="Contact">
                            <ContactsOutlined className='icon-menu-collapse' />
                        </Tooltip>
                    </li> */}
                    <li>
                        <Tooltip placement="right" title="close">
                            <CloseOutlined onClick={toggleCollapse} className='icon-menu-collapse' />
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;