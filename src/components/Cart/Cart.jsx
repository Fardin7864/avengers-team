import PropTypes from 'prop-types';

const Cart = ({listActor,totalSalary}) => {
    // const {name,salary} = listActor;
    console.log(listActor)


    // console.log(salaryx)
    return (
        <div className=" w-1/4 bg-black bg-opacity-30 mt-4 rounded-lg p-4">
            <h3 className="text-xl text-white font-semibold ">Total Actors:{listActor.length} </h3>
            <p className="text-lg text-white font-normal ">Cost: $ <span className="text-xl">{totalSalary}</span> </p>
            <div className=" mt-4">
                <h5 className="text-lg text-white font-bold text-center underline">Name</h5>
                <ul>
                   {
                    listActor.map((actor, idx)=> <li key={idx} className="text-white">{idx +1}. {actor.name}</li>)
                   }
                </ul>
            </div>
        </div>
    );
};

Cart.propTypes = {
    listActor: PropTypes.array.isRequired,
    totalSalary: PropTypes.number
};

export default Cart;