const Fluid = (props) => {
    return(
        <div className='Fluid container-fluid'>
            {props.children}
        </div>
    );
}

export default Fluid;