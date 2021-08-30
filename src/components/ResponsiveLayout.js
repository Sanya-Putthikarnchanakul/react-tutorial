import styled from 'styled-components';

const Container = styled.div`
    width: 75%;
    height: 100vh;
    margin: 0 auto;
`;

const Left = styled.div`
    background-color: #2196F3;
    padding: 20px;
    float: left;
    width: 20%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

const Main = styled.div`
    background-color: #f1f1f1;
    padding: 20px;
    float: left;
    width: 60%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

const Right = styled.div`
    background-color: #4CAF50;
    padding: 20px;
    float: left;
    width: 20%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

const SideBar = styled.div`
    float: left;
    width: 25%;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 5px 10px;
`;

const MainContent = styled.div`
    float: left;
    width: 75%;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 5px 10px;
`;

const Devider = styled.hr`
    margin: 2rem 0;
`;

const ResponsiveLayout = () => {
    return (
        <>
            <Container>
                <div>
                    <Left><p>Left Menu</p></Left>
                    <Main><p>Main Content</p></Main>
                    <Right><p>Right Menu</p></Right>
                </div>

                <Devider />

                <div>
                    <SideBar>25%</SideBar>
                    <MainContent>75%</MainContent>
                </div>

                <Devider />

                <div className="row">
                    <div className="col-3">25%</div>
                    <div className="col-9">75%</div>
                </div>
            </Container>
        </>
    );
}

export default ResponsiveLayout;