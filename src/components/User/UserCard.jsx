import PropTypes from 'prop-types';
const UserCard = ({user}) => {
    // console.log(user)
    const {name,username,email,website}=user
    return (
        <div>
                <div className='bg-green-950 p-5 mt-2 text-white  rounded-lg'>
                     <h1 className='text-center font-bold text-2xl'>{name}</h1>
                     <h2 className='text-center font-semibold text-xl'>{username}</h2>
                     <p className='text-center  text-xl'>{email}</p>
                     <p className='text-center  text-lg'>{website}</p>
                </div>
        </div>
    );
};


UserCard.propTypes={
    user:PropTypes.object.isRequired,
}
export default UserCard;