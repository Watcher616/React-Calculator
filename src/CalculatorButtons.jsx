

import PropTypes from 'prop-types';

const CalculatorButtons = (props) => {
    const {numbers, operations, deleteBtns, handleClick} = props;

    const Numbers = () => {
        return (
            numbers.map((number) => {
                return (
                    <button className="bg-gray-300 hover:bg-gray-400 border text-gray-800 font-bold py-6 px-6 rounded text-center mx-2 my-2" key={number} onClick={() => handleClick(number)}>
                        {number}
                    </button>
                )
            })
        )
    }

    const DeleteBtns = () => {
        return (
            deleteBtns.map((del) => {
                return (
                    <button className=" bg-gray-300 text-gray-800 border font-bold py-6 px-6 rounded text-center mx-2 my-2 p-30 hover:bg-gray-400" key={del} onClick={() => handleClick(del)}>
                        {del}
                    </button> 
                )
            })
        )
    }

    const Operations = () => {
        return (
            operations.map((Operation) => {
                return (
                    <button className="bg-gray-200 hover:bg-gray-400 border text-gray-800 font-bold py-6 px-6 rounded text-center mx-2 my-2 sm:aspect-square sm:w-h-[3.4rem] sm:h-[3.4rem]"  key={Operation} onClick={() => handleClick(Operation)}>
                        {Operation}
                    </button>
                )
            })
        )
    }

    return (
        <div className="flex w-full justify-center h-full font-bold sm:h-[20em] mt-5">
            <div className="grid grid-cols-3 w-[80%]">
                <Numbers />
                <DeleteBtns />
            </div>
            <div className="flex flex-col ">
                <Operations />
            </div>
        </div>
    )
}

CalculatorButtons.propTypes = {
    numbers: PropTypes.array.isRequired,
    operations: PropTypes.array.isRequired,
    deleteBtns: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
};
export default CalculatorButtons;

