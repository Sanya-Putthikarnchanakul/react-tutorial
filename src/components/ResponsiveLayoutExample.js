import styled from 'styled-components';

const Header = styled.div`
    background-color: #9933cc;
    color: #ffffff;
    padding: 1rem;
`;

const SidebarList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SidebarListItem = styled.li`
    padding: 8px;
    margin-bottom: 7px;
    background-color: #33b5e5;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    &:hover {
        background-color: #0099cc;
        cursor: pointer;
    }
`;

const Footer = styled.div`
    background-color: #0099cc;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    padding: 15px;
    position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
`;

const RightContent = styled.div`
    background-color: #33b5e5;
    padding: 15px;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const ResponsiveLayoutExample = () => {
    return (
        <>
            <Header>
                <h1>Chania</h1>
            </Header>

            <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-3">
                    <SidebarList>
                        <SidebarListItem>The Flight</SidebarListItem>
                        <SidebarListItem>The City</SidebarListItem>
                        <SidebarListItem>The Island</SidebarListItem>
                        <SidebarListItem>The Food</SidebarListItem>
                    </SidebarList>
                </div>

                <div className="col-xs-12 col-sm-8 col-md-6">
                    <h1>The City</h1>
                    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
                    <p>Resize the browser window to see how the content respond to the resizing.</p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3">
                    <RightContent>
                        <h2>What?</h2>
                        <p>Chania is a city on the island of Crete.</p>
                        <h2>Where?</h2>
                        <p>Crete is a Greek island in the Mediterranean Sea.</p>
                        <h2>How?</h2>
                        <p>You can reach Chania airport from all over Europe.</p>
                    </RightContent>
                </div>
            </div>

            <Footer>
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </Footer>
        </>
    );
}

export default ResponsiveLayoutExample;