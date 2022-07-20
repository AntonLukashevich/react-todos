export const STYLES: Record<string, any> = {
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '2px solid lightgray',
    borderRadius: '3px',
    marginBottom: '10px',
    width: '100%',
    background: 'rgba(206,212,218,0.5)'
  },
  todoItemBody: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  todoActionBtn: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  todoTitle: {
    fontWeight: 900,
    paddingBottom: '10px',
    textAlign: 'left'
  },
  todoDescriptionContainer: {
    width: '80%'
  },
  todoStatus: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  moreBtn: {
    padding: '0',
    minWidth: '20px'
  },
  in_progress: {
    background: 'rgba(64,192,87,0.7)'
  },
  todo: {
    background: 'rgba(21,170,191,0.7)'
  },
  done: {
    background: 'rgba(253,126,20,0.7)'
  }
}