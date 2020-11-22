const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum illum, sequi perspiciatis id reprehenderit, tempora omnis eum autem iusto nihil odit facilis natus quibusdam officia recusandae dolore nisi vero aperiam!'},
    {id: '2', title: 'collect all the stars', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum illum, sequi perspiciatis id reprehenderit, tempora omnis eum autem iusto nihil odit facilis natus quibusdam officia recusandae dolore nisi vero aperiam!'},
    {id: '3', title: 'egg hunt with yoshi', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum illum, sequi perspiciatis id reprehenderit, tempora omnis eum autem iusto nihil odit facilis natus quibusdam officia recusandae dolore nisi vero aperiam!'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT': {
      console.log(action);
    }
  }
  return state;
}

export default projectReducer