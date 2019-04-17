import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism } from 'react-syntax-highlighter';
import { atomOneDark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Log_8 extends PureComponent {
  renderCode_1 = () => {
    const markdown = ` begin Page 92 => end Page 92`;
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
      return <SyntaxHighlighter language='htmlbars' style={docco} >{code}</SyntaxHighlighter>;
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
      </div>
    )
  }
}

export default Log_8;
