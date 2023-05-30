function Component({ component }) {
    return (
      <div
        style={{
          width: '500px',
          height: '500px',
          background: component.color,
          margin: '10px',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{component.title}</h2>
        <p>{component.text}</p>
        <h4 style={{ fontStyle: 'italic' }}>{component.from}</h4>
      </div>
    );
  }
  
  export default Component;