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
    textAlign: 'center'
  },
  todoDescriptionContainer: {
    width: '80%'
  },
  todoDescription: {
    overflow: 'hidden',
    display: '-webkit-box',
    lineHeight: "1.18em",
    height: "1.8em"
  },
  todoStatus: {
    display: 'flex',
    justifyContent: 'flex-end'
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