

import PropTypes from 'prop-types';

const Screen = (props) => {
    const { display } = props;
    return (
        <div className="w-full h-36 bg-slate-50 text-slate-700 font-bold rounded border border-slate-300 flex justify-end items-end pr-4 pb-2 mt-10 text-3xl overflow-hidden sm:h-12 sm:mt-0">
            {display}
        </div>
    );
};

Screen.propTypes = {
    display: PropTypes.string.isRequired,
};

export default Screen;

    
