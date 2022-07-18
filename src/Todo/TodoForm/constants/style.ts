export const STYLES = {
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'none',
    background: 'rgba(211,211,211,0.4)'
  },
  active: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '100'
  },

  content: {
    padding: '25px',
    background: 'white',
    margin: 'auto 0',
    width: '100%',
    maxWidth: '600px'
  },

  inputTodoTitle: {
    width: '100%',
    marginBottom: '20px',
    marginTop: '10px'
  },

  inputTodoDescription: {
    width: '100%',
    marginBottom: '20px',
    height: '200px',
    border: '1px solid lightgray',
    borderRadius: '4px'
  },

  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  btn: {
    width: '100px'
  },

  btnClose: {
    background: 'red',
    borderRadius: '50%',
    color: '#fff',
    border: 'none',
    right: '20px'
  }
}