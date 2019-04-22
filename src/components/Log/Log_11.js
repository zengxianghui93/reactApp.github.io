import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism } from 'react-syntax-highlighter';
import { atomOneDark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Log_11 extends PureComponent {
  renderTitle = () => {
    const markdown = ` begin Page 98 => end Page 98`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{markdown}</SyntaxHighlighter>;
  }

  renderText_1 = () => {
    const text = `In order to bestow our app with interactivity, we must evolve it from its static existence to a mutable one.
The first step is determining what, exactly, should be mutable. Let’s start by collecting all of the data that’s employed by 
each component in our static app.  In our static app, data will be wherever we are defining or using props.We will then determine 
which of that data should be stateful.
  为了让我们的应用程序更富有交互性，我们必须将它从静态的演化为可变的。首先我们得确定什么是可变的。让我们从静态应用程序中收集每个组件使用的所有数据开始。
在我们静态程序中，数据将在我们定义或者props的位置出现。然后，我们将确定哪些数据应该是有状态的。`
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_2 = () => {
    const text = `In our static app, this declares two child components. It sets one prop, which is the isOpen boolean that is 
passed down to ToggleableTimerForm.
  在我们静态的应用程序中，它声明了两个子组件。它通过设置布尔的isOpen props属性，传递给ToggleableTimerForm组件`

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

  renderText_3 = () => {
    const text = `This declares two child components, each which have props corresponding to a given timer’s properties.
  EditableTimerList声明了两个子组件，每个组件都具有与给定计时器props属性对应。`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_4 = () => {
    const text = `This uses the prop editFormOpen.
  这里使用了editFormOpen的props属性`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }



  renderInfo_1 = () => {
    const info = `Note that we could store elapsed in seconds as opposed to milliseconds, 
but JavaScript’s time functionality is all in milliseconds. 
We keep elapsed consistent with this for simplicity. As a bonus, 
our timers are also slightly more accurate, even though they round to seconds when displayed to the user
  注意，我们可以用秒而不是毫秒来存储时间，但是JavaScript的时间功能都是以毫秒为单位的。
  为了简单起见，我们保持与此一致。另外，我们的计时器也稍微准确一些，即使当显示给用户时，计时器四舍五入为秒。`;

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
    const text = `This uses all the props for a timer.
  这里使用了来自timer的所有props属性`;

    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_6 = () => {
    const text = `This has two interactive input fields, one for title and one for project. When editing an existing timer, 
these fields are initialized with the timer’s current values.
  这里定义了两个input字段，title 和 project字段。当编辑timer组件时，这些字段的值将根据当前的值被初始化。
`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_7 = () => {
    const text = `We can apply criteria to determine if data should be stateful:
  我们可以通过一个标准来确定数据是否应该是有状态的:。可以参照Thinking in React(https://reactjs.org/docs/thinking-in-react.html)
1. Is it passed in from a parent via props? 
  If so, it probably isn’t state.
A lot of the data used in our child components are already listed in their parents. This criterion helps us de-duplicate.
For example, “timer properties” is listed multiple times. When we see the properties declared in EditableTimerList, we can consider it state. But when we see it elsewhere, it’s not.
2. Does it change over time? If not, it probably isn’t state.
  This is a key criterion of stateful data: it changes.
3. Can you compute it based on any other state or props in your component? If so, it’s not state.
  For simplicity, we want to strive to represent state with as few data points as possible.
  1.props属性是通过从父组件那里传递过来的吗?如果是这样，它可能不是状态。
    我们的子组件中使用的许多数据已经在它们的父组件中列出。根据这个标准帮助我们去确定是否时state的。
    例如，“timer属性”被多次列出。当我们看到EditableTimerList中声明的属性时，我们可以考虑它是有状态。但当我们在其他地方看到它时，它不是。
  2.它会随时间改变吗?如果不是，它可能不是状态。
    这是有状态数据的一个关键标准:it changes.
  3.你可以基于组件中的任何其他状态或props计算它吗?如果是，那就不是状态。
    为了简单起见，我们希望用尽可能少的数据点来表示状态。`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_8 = () => {
    const text = `Stateful. The data is defined here. It changes over time. And it cannot be computed from other state
or props.
  有状态的。这里定义了数据。它会随着时间而改变。它不能从其他状态计或props属性计算出来`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_9 = () => {
    const text = `In this context, not stateful. Properties are passed down from the parent.
  在这种情况下，是没有状态的。因为属性是从父类传递下来的。`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_10 = () => {
    const text = `We might be tempted to conclude that TimerForm doesn’t manage any stateful data, as title and project are 
props passed down from the parent. However, as we’ll see, forms are special state managers in their own right.
So, outside of TimerForm, we’ve identified our stateful data:
• The list of timers and properties of each timer 
• Whether or not the edit form of a timer is open 
• Whether or not the create form is open
  我们可能会得出这样的结论:TimerForm不管理任何有状态的数据，因为title和project是从父类传递下来的。但是，我们将看到，表单本身就是特殊的状态管理器。
因此，除TimerForm之外，我们已经确定了我们的有状态数据:
  • 计时器列表和每个计时器的props属性 
  • 计时器的编辑表单是否open
  • 创建表单是否open`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_11 = () => {
    const text = `While the data we’ve determined to be stateful might live in certain components in our static app, this does 
not indicate the best position for it in our stateful app. Our next task is to determine the optimal place for each of our 
three discrete pieces of state to live.

This can be challenging at times but, again, we can apply the following steps from Facebook’s guide “Thinking in React36” to 
help us with the process:

For each piece of state:
  • Identify every component that renders something based on that state.
  • Findacommonownercomponent(asinglecomponentaboveallthecomponents that need the state in the hierarchy).
  • Either the common owner or another component higher up in the hierarchy
  should own the state.
  • If youcan’t find a component where it makes sense to ownthe state,createanew
  component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

  虽然我们确定为有状态的数据可能位于静态应用程序中的某些组件中，但这并不表示它处于有状态应用程序中的最佳位置。
  这有时是很有挑战性的，但是，同样的，我们可以应用Facebook的指南“在React Thinking”中的以下步骤来帮助我们完成这个过程:
  对每一个state来说：
    • 识别基于该状态呈现内容的每个组件。
    • 找出公用的组件(一个单例组件需要的层次结构).
    • 公共所有者或层次结构中较高的其他组件将有独自的state
    • 如果找不到拥有状态的组件，只需创建新组件以保存状态，并将其添加到公共所有者组件上方的层次结构中的某个位置
  `;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  renderText_12 = () => {
    const text = `Let’s apply this method to our application:.
  让我们把这个方法应用到我们的应用中:`;
    return <SyntaxHighlighter language='htmlbars' style={atomOneDark} >{text}</SyntaxHighlighter>;
  }

  render() {
    return (
      <div>
        <div>
          <ReactMarkdown source='# Reading....' />
          {this.renderTitle()}
          <ReactMarkdown source='# Step 3: Determine what should be stateful' />
          {this.renderText_1()}
          <ReactMarkdown source='## TimersDashboard' />
          {this.renderText_2()}
          <ReactMarkdown source='## EditableTimerList' />
          {this.renderText_3()}
          <ReactMarkdown source='## EditableTimer' />
          {this.renderText_4()}
          <ReactMarkdown source='## Timer' />
          {this.renderText_5()}
          <ReactMarkdown source='## Timer' />
          {this.renderText_6()}
          <ReactMarkdown source='## State criteria' />
          {this.renderText_7()}
          <ReactMarkdown source='## Applying the criteria' />
          <ReactMarkdown source='#### TimersDashboard（isOpen boolean for ToggleableTimerForm）' />
          {this.renderText_8()}
          <ReactMarkdown source='#### EditableTimerList （Timer properties）' />
          {this.renderText_8()}
          <ReactMarkdown source='#### EditableTimer （editFormOpen for a given timer）' />
          {this.renderText_8()}
          <ReactMarkdown source='#### Timer （Timer properties）' />
          {this.renderText_9()}
          <ReactMarkdown source='#### TimerForm （Timer properties）' />
          {this.renderText_10()}
        </div>
        <div>
          <ReactMarkdown source='# Step 4: Determine in which component each piece of state should live' />
          {this.renderText_11()}
          {this.renderText_12()}
        </div>
      </div>
    )
  }
}

export default Log_11;
