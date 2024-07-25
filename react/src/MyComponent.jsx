import { useEffect } from 'react';

const MyComponent = ({ count }) => {
    

    useEffect(() => {
        const testListener = () => {
            const array = [];
    
            for (let i = 0; i < 100000; i++) {
                array.push(i)
            }
    
            console.log(array);
        }

        window.addEventListener('resize', testListener);

        // return () => window.removeEventListener('resize', testListener);
    }, [])

    return (
        <div>Какие-то уроки {count}</div>
    )
}

export default MyComponent;







// const getData = () => {
        // const array = [];

        // for (let i = 0; i < 100000; i++) {
        //     array.push(i)
        // }

    // };

    // const items = getData();