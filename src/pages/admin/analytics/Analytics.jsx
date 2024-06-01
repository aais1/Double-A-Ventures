import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';


const Analytics = () => {
    const data = {
        labels: ['Shoes', 'Shirts', 'Bags', 'Jeans', 'Hats'],
        datasets: [
            {
                data: [120, 80, 200, 150, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div>
            <p className='text-xl text-sky-500 font-semibold'>Total Sales</p>
            <div className='flex justify-center'>
                <Doughnut
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
}

export default Analytics