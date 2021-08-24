const formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
}

const getGreeting = (user) => {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const name = 'Josh Perez';
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element1 = <h1>Hello, world!</h1>;

const element2 = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

const IntroJSX = () => {
    return (
        <>
            <h3>แนะนำ JSX</h3>

            {element1}

            <h1>My name is {name}</h1>

            {element2}

            {getGreeting()}
        </>
    )
}

export default IntroJSX