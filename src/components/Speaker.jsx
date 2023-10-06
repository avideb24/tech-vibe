import PropTypes from 'prop-types';

const Speaker = ({ speaker }) => {

    const { name, image, position, company } = speaker;

    return (
        <div className='w-72 bg-[#1f2c57] p-4 rounded-md text-center space-y-3'>
            <img className='w-full h-80 object-cover rounded-md' src={image} alt="" />
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm'><span>{position}</span> at <span>{company}</span></p>
        </div>
    );
};

export default Speaker;

Speaker.propTypes = {
    speaker: PropTypes.object
}