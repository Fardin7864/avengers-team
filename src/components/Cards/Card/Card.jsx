import PropTypes from 'prop-types';

const Card = ({actor}) => {
    const {name,role,salary,career_details,image} = actor;
    return (
        <div className="w-full bg-transparent border border-gray-200 rounded-lg drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-bold text-white dark:text-white py-2">{name}</h5>
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="Bonnie image" />
          <span className="text-sm text-white dark:text-gray-600 text-center font-medium">{career_details}</span>
            <div className='flex justify-between w-full px-9 py-4'>
            <span className="text-sm text-white dark:text-gray-400 font-semibold">Role: {role}</span>
            <span className="text-sm text-white dark:text-gray-400 font-semibold">Salary: ${salary}</span>
            </div>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
          </div>
        </div>
      </div>
    );
};

Card.propTypes = {
    actor: PropTypes.object.isRequired,
    name: PropTypes.string,
    role: PropTypes.string,
    salary: PropTypes.number,
    career_details: PropTypes.string
};

export default Card;