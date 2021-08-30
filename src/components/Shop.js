import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch, Link, useLocation } from 'react-router-dom';

import AllProducts from './AllProducts';
import AddProduct from './AddProduct';

const SideBar = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #111;
    width: 200px;
    transition: 0.5s;

    & > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    & > ul > li {
        color: #fff;
        padding: 5px 10px;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
    }

    & > ul > li:hover {
        opacity: 0.5;
    }

    & > ul > li > a > svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    & > ul > li > a {
        width: 100%;
        text-decoration: none;
        color: #fff;
    }

    ${
        (props) => !props.isDrawerOpen ? css`width: 44px;` : css`width: 200px;`
    }

    @media only screen and (max-width: 500px) {
        width: 44px;
    }
`;

const Hamberger = styled.div`
    padding: 5px 10px;

    & > svg {
        width: 24px;
        height: 24px;
    }

    & > svg:hover {
        cursor: pointer;
    }
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 200px;
    right: 0;
    height: 30px;
    transition: 0.5s;
    background: green;

    ${
        (props) => !props.isDrawerOpen ? css`left: 44px;` : css`left: 200px;`
    }

    @media only screen and (max-width: 500px) {
        left: 44px;
    }
`;

const Content = styled.div`
    margin-left: 200px;
    margin-top: 30px;
    padding: 20px;
    transition: 0.5s;

    ${
        (props) => !props.isDrawerOpen ? css`margin-left: 44px;` : css`margin-left: 200px;`
    }

    @media only screen and (max-width: 500px) {
        margin-left: 44px;
    }
`;

const Shop = () => {
    const match = useRouteMatch();
    let location = useLocation();

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [activePath, setActivePath] = useState(`${match.url}`);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    const onSlideMenuHandler = () => {
        setIsDrawerOpen(prev => !prev);
    }

    return (
        <>
            <Header isDrawerOpen={isDrawerOpen}></Header>

            <SideBar isDrawerOpen={isDrawerOpen}>
                <Hamberger>
                    <svg onClick={onSlideMenuHandler}>
                        <path fill="#ffffff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </Hamberger>

                <ul>
                    <li className={activePath === match.path ? 'is-active' : ''}>                       
                        <Link to={`${match.url}`}>
                            <svg>
                                <path fill="#ffffff" d="M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9Z" />
                            </svg>
                            All Products
                        </Link>
                    </li>
                    <li className={activePath === `${match.path}/add-product` ? 'is-active' : ''}>                       
                        <Link to={`${match.url}/add-product`}>
                            <svg>
                                <path fill="#ffffff" d="M19 13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H13.35C13.13 20.37 13 19.7 13 19C13 15.69 15.69 13 19 13M14 4.5L19.5 10H14V4.5M23 18V20H20V23H18V20H15V18H18V15H20V18H23Z" />
                            </svg>
                            Add Product
                        </Link>                      
                    </li>
                </ul>
            </SideBar>

            <Content isDrawerOpen={isDrawerOpen}>
                <Switch>
                    <Route exact path={match.path}><AllProducts/></Route>
                    <Route path={`${match.path}/add-product`}><AddProduct/></Route>
                </Switch>
            </Content>
        </>
    );
}

export default Shop;