const SelectButton = ({ children, selected, onClick }) => {
    return (
      <span
        onClick={onClick}
        style={{
          border: '1px solid gold',
          borderRadius: 5,
          padding: '10px 20px',
          fontFamily: 'Montserrat',
          cursor: 'pointer',
          backgroundColor: selected ? 'gold' : '',
          color: selected ? 'black' : '',
          fontWeight: selected ? 700 : 500,
          width: '22%',
          '&:hover': {
            backgroundColor: 'gold',
            color: 'black',
          },
        }}
      >
        {children}
      </span>
    );
  };
  
  export default SelectButton;