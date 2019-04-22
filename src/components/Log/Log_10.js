import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism } from 'react-syntax-highlighter';
import { atomOneDark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Log_10 extends PureComponent {
  renderTitle = () => {
    const markdown = ` begin Page 95 => end Page 95`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{markdown}</SyntaxHighlighter>;
  }

  renderText_1 = () => {
    const text = `At the beginning of render(), before the return statement, we define a variable submitText. 
  在return和render之间我们定义了一个submitText的变量。
This variable uses the presence of this.props.title to determine 
what text the submit button at the bottom of the form should display.
  这个变量通过this.props.title是否存在来决定底部的按钮应该显示具体的文本
If title is present, we know we’re editing an existing timer, so it displays “Update.” Otherwise, it displays “Create.”
  如果this.props.title存在，我们知道正在编辑一个现有计时器，因此它显示“Update”。否则，它将显示“Create”。
With all of this logic in place, TimerForm is prepared to render a form for creating a new timer or editing an existing one.
  通过此逻辑，TimerForm准备渲染用于创建新计时器或编辑现有计时器的表单。`
  return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_2 = () => {
    const text = `Let’s turn our attention next to ToggleableTimerForm. 
    让我们把注意力转向ToggleableTimerForm组件。
Recall that this is a wrapper component around TimerForm. It will display either a “+” or a TimerForm. 
   回想一下，这是一个围绕TimerForm的包装器组件。它将显示一个“+”或一个TimerForm。
Right now, it accepts a single prop, isOpen, from its parent that instructs its behavior:
   现在，它从它的父类那里接受一个props属性，isOpen，来渲染它的行为:`
  
  return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderCode_1 = () => {
    const code = `class ToggleableTimerForm extends React.Component { 
  render() {
    if (this.props.isOpen) { 
      return (
        <TimerForm />
      );
    } else { 
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'>
            <i className='plus icon' />
          </button>
        </div> 
      );
    }
  }
}`;
    return <Prism language='javascript' style={prism} showLineNumbers>{code}</Prism>;
  }

  renderText_3 =() => {
    const text = `As noted earlier, TimerForm does not receive any props from ToggleableTimerForm. As such, its
title and project fields will be rendered empty.
The return statement under the else block is the markup to render a “+” button. 
You could make a case that this should be its own React component (say PlusButton) 
but at present we’ll keep the code inside ToggleableTimerForm.
  如钱所叙，TimerForm没有接受任何来自父组件props属性，因此title和project属性将被渲染成空。
  else下的语句是返回“+”button组件。你也可以认为它自己也是一个React组件（PlusButton）
  但现在我们将在ToggleableTimerForm中保持不变。
`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_4 = () => {
    const text =`Time for the Timer component. Again, don’t worry about all the div and 
span elements and className attributes. We’ve provided these for styling purposes:
  开始编写Timer组件了。再一次声明不必担心所有的div、span元素和claa样式，我们提供这些是为了美化。`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  

  renderInfo_1 = () => {
    const info =`Note that we could store elapsed in seconds as opposed to milliseconds, 
but JavaScript’s time functionality is all in milliseconds. 
We keep elapsed consistent with this for simplicity. As a bonus, 
our timers are also slightly more accurate, even though they round to seconds when displayed to the user
  注意，我们可以用秒而不是毫秒来存储时间，但是JavaScript的时间功能都是以毫秒为单位的。
  为了简单起见，我们保持与此一致。另外，我们的计时器也稍微准确一些，即使当显示给用户时，计时器四舍五入为秒。`;

    return <SyntaxHighlighter language='htmlbars' style={docco} >{info}</SyntaxHighlighter>;
  }

  renderInfo_2 = () => {
    const info =`Again, we specify with ReactDOM#render() which React component we want to 
render and where in our HTML document (index.html) to render it.
In this case, we’re rendering TimersDashboard at the div with the id of content.
  同样，我们使用ReactDOM#render()指定要渲染的React组件在HTML文档(index.html)中的位置。
  在本例中，我们使用div id=content 中渲染TimersDashboard组件。`;

    return <SyntaxHighlighter language='htmlbars' style={docco} >{info}</SyntaxHighlighter>;
  }

  renderCode_2 = () => {
    const code = `class Timer extends React.Component { 
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed); 
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>{this.props.title}</div>
          <div className='meta'> {this.props.project}</div>
          <div className='center aligned description'>
            <h2>{elapsedString}</h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>
          Start
        </div>
      </div>
    );
  }`;
    return <Prism language='javascript' style={prism} showLineNumbers>{code}</Prism>;
  }

  renderText_5 = () => {
    const text = `elapsed in this app is in milliseconds. 
This is the representation of the data that React will keep. 
This is a good representation for machines, but we want to show our carbon-based users a more readable format.
  这个应用程序的运行时间是以毫秒为单位的。
  这是React将保留的数据表现形式，
  这对于机器来说是一种很好的表示，但是我们希望向用户展示一种更具可读性的格式。
We use a function defined in helpers.js, renderElapsedString(). 
You can pop open that file if you’re curious about how it’s implemented. 
The string it renders is in the format ‘HH:MM:SS’.
  我们使用了helpers.js里的renderElapsedString()方法。
  如果您对该方法的实现源码感兴趣，可以打开该文件。默认展示的字符串格式为' HH:MM:SS '。`;

    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_6 = () => {
    const text = `With all of the components defined, 
the last step before we can view our static app is to ensure we call ReactDOM#render(). 
Put this at the bottom of the file:
  定义了所有组件之后，在查看静态应用程序之前的最后一步是确保调用ReactDOM#render()。
  把这个放在文件的底部:
`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_7 = () => {
    const text = `Save app.js and boot the server (npm start). Find it at localhost:3000:
Let’s review all of the components represented on the page:
Inside TimersDashboard are two child components: EditableTimerList and ToggleableTimerForm.
EditableTimerList contains two EditableTimer components. 
The first of these has a Timer component as a child and the second a TimerForm. 
These bottom-level components — also known as leaf components — hold the majority of the page’s HTML. 
This is generally the case. The components above leaf components are primarily concerned with orchestration.
ToggleableTimerForm renders a TimerForm. Notice how the two forms on the page have different language for their buttons, 
as the first is updating and the second is creating.`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_8 = () => {
    const text = `
    保存app.js并运行 npm start命令，将在浏览器中以localhost:3000:呈现：让我们回顾一下当前页面的所有组件：
    TimersDashboard包含两个组件EditableTimerList 和 ToggleableTimerForm.
    EditableTimerList包含两个EditableTimer组件. 
    其中第一个组件是由Timer作为子组件,第二个是TimerForm组件。
    这些底层组件(也称为叶子组件)占据了页面HTML的大部分。这是普遍情况。
    上面的叶子组件主要与业务流程有关。
    ToggleableTimerForm 渲染了一个 TimerForm组件.
    请注意页面上的两个表单的按钮作用不一样，因为第一个表单在更新，第二个表单在创建。
    `;
    return <ReactMarkdown source={text} />
  }

  renderCode_3 = () => {
    const code = `ReactDOM.render(
  <TimersDashboard />,
  document.getElementById('content')
);`;
    return <Prism language='javascript' style={prism} showLineNumbers>{code}</Prism>;
  }


  render() {
    return (
      <div>
        <ReactMarkdown source='# Reading....' />
        { this.renderTitle() }
        <ReactMarkdown source='# page 94' />
        { this.renderText_1() }
        <ReactMarkdown source='## ToggleableTimerForm' />
        { this.renderText_2() }
        { this.renderCode_1() }
        { this.renderText_3() }
        <ReactMarkdown source='## Timer' />
        { this.renderText_4() }
        { this.renderCode_2() }
        { this.renderText_5() }
        <ReactMarkdown source='### info' />
        { this.renderInfo_1() }
        <ReactMarkdown source='## Render the app' />
        { this.renderText_6() }
        { this.renderCode_3() }
        <ReactMarkdown source='### info' />
        { this.renderInfo_2() }
        <ReactMarkdown source='## Try it out' />
        { this.renderText_7() }
        { this.renderText_8() }
      </div>
    )
  }
}

export default Log_10;
