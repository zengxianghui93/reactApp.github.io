import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism } from 'react-syntax-highlighter';
import { atomOneDark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Log_8 extends PureComponent {
  renderCode_1 = () => {
    const markdown = ` begin Page 92 => end Page 94`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{markdown}</SyntaxHighlighter>;
  }

  renderCode_2 = () => {
    const code = `class EditableTimerList extends React.Component { 
  render() {
    return (
      <div id='timers'>
        <EditableTimer 
          title='Learn React' 
          project='Web Domination' 
          elapsed='8986300' 
          runningSince={null}
          editFormOpen={false} 
        />
        <EditableTimer
          title='Learn extreme ironing' 
          project='World Domination' 
          elapsed='3890985' 
          runningSince={null} 
          editFormOpen={true}
        />
      </div>
    );
  }
}`;
    return <Prism language='javascript' style={prism} showLineNumbers>{code}</Prism>;
  }

  renderCode_3 = () => {
    const code = `We’re passing five props to each child component. 
  我们给每个子组件定义了了5个props属性
The key difference between the two Editable-Timer components is the value being set for editFormOpen.
  两个Editable-Timer组件唯一不同的就是editFormOpen设置props属性值的不同
We’ll use this boolean to instruct EditableTimer which sub-component to render.
  我们通过这个布尔值来指示渲染哪个子组件`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{code}</SyntaxHighlighter>;
  }

  renderCode_4 = () => {
    const code =`The purpose of the prop runningSince will be covered later on in the app’s development.
  props的目的将在以后的应用程序开发中讨论。`;
    return <SyntaxHighlighter language='htmlbars' style={docco} >{code}</SyntaxHighlighter>;
  }

  renderCode_5 = () => {
    const code =`EditableTimer returns either a TimerForm or a Timer based on the prop editFormOpen:
    EditableTimer返回一个TimerForm或一个基于editFormOpen的TimerForm组件:`;
      return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{code}</SyntaxHighlighter>;
  }

  renderCode_6 = () => {
    const code = `class EditableTimer extends React.Component { 
  render() {
    if (this.props.editFormOpen) { 
      return (
        <TimerForm title={this.props.title} project={this.props.project} />
      );
    } else {
      return ( 
        <Timer
          title={this.props.title} 
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince} 
        />
      );
    }
  }
}`;
    return <Prism language='javascript' style={prism} showLineNumbers>{code}</Prism>;
  }

  renderCode_7 = () => {
    const code = `Note that title and project are passed down as props to TimerForm. 
  注意，title和project属性作为props传递给TimerForm。
This will enable the component to fill in these fields with the timer’s current values.
  这将使组件能够通过props的值填充当前字段。`
  return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{code}</SyntaxHighlighter>;
  }

  renderCode_8 = () => {
    const code = `We’ll build an HTML form that will have two input fields. 
  我们将构建一个包含两个输入字段的HTML表单
The first input field is for the title and the second is for the project. 
  第一个是标题，第二个项目名称
It also has a pair of buttons at the bottom.
  同时在底部还有一对按钮`
  return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{code}</SyntaxHighlighter>;
  }

  renderCode_9 = () => {
    const code = `class TimerForm extends React.Component {   
  render() {
    const submitText = this.props.title ? 'Update' : 'Create'; 
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' defaultValue={this.props.title} /> 
            </div>
            <div className='field'>
              <label>Project</label>
              <input type='text' defaultValue={this.props.project} />
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button'>
                {submitText}
              </button>
              <button className='ui basic red button'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}`;
    return <Prism language='javascript' style={prism} showLineNumbers>{code}</Prism>;
  }

  renderText_1 = () => {
    const text = `Look at the input tags. 
  通过input标签可以发现
We’re specifying that they have type of text and then we are using the React property defaultValue. 
  我们指定了input的本文类型（type="text"），并使用了React的defaultValue属性
When the form is used for editing as it is here, this sets the fields to the current values of the timer as desired.
  当表单被编辑时，则将timer组件的值设置为当前值。`
  return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderInfo_1 = () => {
    const info =`Later, we’ll use TimerForm again within ToggleableTimerForm for creating timers. 
    稍后，我们将在ToggleableTimerForm中再次使用TimerForm来创建计时器。
ToggleableTimerForm will not pass TimerForm any props. 
  ToggleableTimerForm将不会给TimerForm组件传递任何props属性
this.props.title and this.props.project will therefore return undefined and the fields will be left empty.
  因此this.props.title和this.props.project返回undefined,input的值也将会是空的
`;
    return <SyntaxHighlighter language='htmlbars' style={docco} >{info}</SyntaxHighlighter>;
  }


  render() {
    return (
      <div>
        <ReactMarkdown source='# Reading....' />
        { this.renderCode_1() }
        <ReactMarkdown source='# page 92' />
        { this.renderCode_2() }
        { this.renderCode_3() }
        <ReactMarkdown source='### *info' />
        { this.renderCode_4() }
        <ReactMarkdown source='## EditableTimer' />
        { this.renderCode_5() }
        { this.renderCode_6() }
        { this.renderCode_7() }
        <ReactMarkdown source='## TimerForm'/>
        { this.renderCode_8() }
        { this.renderCode_9() }
        { this.renderText_1() }
        <ReactMarkdown source='### *info' />
        { this.renderInfo_1() }
      </div>
    )
  }
}

export default Log_8;
