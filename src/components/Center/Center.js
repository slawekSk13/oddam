const Center = ({children}) => {
    const style = {
        textAlign: 'center',
        width: '25%'
    }

    return(
        <div style={style}>
            {children}
        </div>
    )
}

export {Center}