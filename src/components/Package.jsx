import PropTypes from 'prop-types';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Package = ({ pack }) => {

    const { packageName, price, description, options, } = pack;

    const activeTrue = options.filter(item => item.active === true);
    const activeFalse = options.filter(item => item.active === false);

    const trueLabel = activeTrue.map(item => item.label)
    const falseLabel = activeFalse.map(item => item.label)

    return (
        <div className='text-center w-80 p-8 bg-[#091f4c] rounded-md mt-10 space-y-4 flex flex-col justify-between'>
            <h3 className='text-xl text-[#08133a] font-bold p-4 rounded-tl-full bg-yellow-500'>{packageName}</h3>
            <h2 className='text-5xl text-yellow-500 font-bold'>${price}</h2>
            <p className='text-sm pb-2'>{description}</p>
            <div className='w-20 h-2 mx-auto bg-yellow-500'></div>
            <div className='pt-2'>
                {
                    activeTrue &&
                    <div className='space-y-2'>
                        {
                            trueLabel.map((item, idx) =>
                                <p key={idx} className='flex items-center gap-3'><AiOutlineCheckCircle></AiOutlineCheckCircle> {item}</p>)
                        }
                    </div>
                }
                {
                    activeFalse &&
                    <div className='space-y-2'>
                        {
                            falseLabel.map((item, idx) =>
                                <p key={idx} className='flex items-center gap-3 text-[#465779]'><AiOutlineCheckCircle></AiOutlineCheckCircle> {item}</p>)
                        }
                    </div>
                }
            </div>
            <div>
                <button className='px-3 py-1 text-[#091f4c] font-bold mt-4 bg-yellow-500 rounded-md'>Buy Now</button>
            </div>
        </div>
    );
};

export default Package;

Package.propTypes = {
    pack: PropTypes.object
}