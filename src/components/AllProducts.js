import styled from 'styled-components';

const courses = [
    {
        image: 'https://img-c.udemycdn.com/course/240x135/2472180_0143.jpg',
        name: 'Complete guide to building an app with .Net Core and React',
        author: 'Neil Cummings',
        price: 479
    },
    {
        image: 'https://img-c.udemycdn.com/course/240x135/2472180_0143.jpg',
        name: 'Complete guide to building an app with .Net Core and React',
        author: 'Neil Cummings',
        price: 479
    },
    {
        image: 'https://img-c.udemycdn.com/course/240x135/2472180_0143.jpg',
        name: 'Complete guide to building an app with .Net Core and React',
        author: 'Neil Cummings',
        price: 479
    },
    {
        image: 'https://img-c.udemycdn.com/course/240x135/2472180_0143.jpg',
        name: 'Complete guide to building an app with .Net Core and React',
        author: 'Neil Cummings',
        price: 479
    },
    {
        image: 'https://img-c.udemycdn.com/course/240x135/2472180_0143.jpg',
        name: 'Complete guide to building an app with .Net Core and React',
        author: 'Neil Cummings',
        price: 479
    }
];

const Card = styled.div`
    cursor: pointer;

    &:hover {
        background: white;
        opacity: 0.5;
        box-shadow: 0 10px 25px rgb(0 0 0 / 5%), 0 20px 48px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 10%);
    }
`;

const AllProducts = () => {
    return (
        <>
            <h3>All Products</h3>

            <div className='row'>
                {
                    courses.map((i, index) => {
                        return (
                            <div key={index} className='col-xs-12 col-sm-12 col-md-6 col-lg-3'>
                                <Card>                                  
                                    <img src={i.image} width='100%' alt={i.name}/>
                                    <h5>{i.name}</h5>
                                    <p>{i.author}</p>
                                    <h3>{i.price}</h3>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default AllProducts;