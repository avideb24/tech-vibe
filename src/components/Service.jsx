import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, title, image, description, price } = service;

    return (
        <div className='p-5 rounded-md bg-[#172557d2] space-y-3'>
            <img className='w-full rounded-md h-60 object-cover' src={image} alt="" />
            <h2 className='text-xl font-bold'>{title}</h2>
            {
                description.length > 100 ?
                    <p>{description.slice(0, 200)}.....</p> :
                    <p>{description}</p>
            }
            <p>${price}</p>
            <Link to={`/data/${id}`}><button className='px-4 py-1 bg-yellow-500 text-[#08133a] rounded-md inline-block mt-4'>View Details</button></Link>
        </div>
    );
};

export default Service;

Service.propTypes = {
    service: PropTypes.object
}