import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from 'antd';
import Prism from 'prismjs';

class Log_6 extends PureComponent {
  state = {
    name: 'zoro'
  };

  handleBtnClick = () => {
    this.setState({ name: 'i am zoro'});
  }

  renderCode_1 = () => {
    const markdown = `
      begin
      Page 88.
      ----------
      end
      Page 91.
    `;
    return markdown;
  }

  renderCode_2 = () => {
    const code = `
    Finally, we’ll modify the top-level component to have it communicate with the server.
    最后，我们将修改顶层组件，使其与服务器通信。
    In fact, this follows from a handy framework for developing a React app from scratch
    事实上，这是从零开始开发React应用程序的一个方便框架:
      1. Break the app into components
      将应用程序拆分成组件
      2.Build a static version of the app
      构建一个静态版本的应用程序
      3. Determine what should be stateful
      确定什么是有状态的
      4.Determine in which component each piece of state should live
      确定state应该位于哪个组件中
      5. Hard-code initial states
      初始化state
      6. Add inverse data flow components
      添加反向数据流组件
      7. Add server communication
      添加服务器通信
    `;
    return code;
  }
  renderCode_3 = () => {
    const code = `
    We followed this pattern in the last project:
    在上一个项目中，我们遵循了这个模式:
    1. Break the app into components
    将应用程序拆分成组件
      We looked at the desired UI and determined we wanted ProductList and Product components.
      我们根据所需的UI确定ProductList和Product组件。
    2. Build a static version of the app
    构建一个静态版本的应用程序
      Our components started off without using state. Instead, we had ProductList pass down static props to Product.
      我们的组件在没有使用state。取而代之是让ProductList以静态的props的方式传递给Product。
    3. Determine what should be stateful
    确定什么是有状态的
      In order for our application to become interactive, we had to be able to modify the vote property on each product.
      Each product had to be mutable and therefore stateful.
      为了使我们的应用程序具有交互性，我们必须能够修改每个product的投票属性。每个Product组件都必须是可变的，因此它是有状态的。
    4. Determine in which component each piece of state should live
    确定state应该位于哪个组件中
      ProductList managed the voting state using React component class methods.
      ProductList使用React组件类方法管理投票状态。
    5. Hard-code initial state
    初始化state
      When we re-wrote ProductList to use this.state, we seeded it from Seed.products.
      当我们用this.state重新编写ProductList时。我们从Seed.product初始化数据
    6. Add inverse data flow
    添加反向数据流组件
      We defined the handleUpVote function in ProductList and passed it down in props so that each 
      Product could inform ProductList of up-vote events.
      我们在ProductList中定义了handleUpVote函数，并在props中传递它，这样每个产品都可以将upvote事件通知ProductList。
    7. Add server communication
    添加服务器通信
      We did not add a server component to our last app, but we will be doing so in this one.
      我们没有在上一个应用程序中添加服务器组件，但是我们将在这个应用程序中添加服务器组件。
      If steps in this process aren’t completely clear right now, don’t worry.
      如果这个过程中的步骤现在还不完全清楚，不要担心。
      The purpose of this chapter is to familiarize yourself with this procedure.
      本章的目的是使你熟悉这个程序。
      We’ve already covered step (1) and have a good understanding of all of our components, 
      save for some uncertainty down at the Timer component. 
      我们已经讨论了步骤(1)，并且对所有组件都有很好的理解，除了Timer component上的一些不确定性。
      Step (2) is to build a static version of the app. As in the last project, 
      this amounts to defining React components, their hierarchy, and their HTML representation. 
      步骤(2)是构建一个静态版本应用程序。与上一个项目一样，这相当于定义React组件、层次结构和HTML表现形式。
      We completely avoid state for now.
      我们现在完全避免了state。
    `;
    return code;
  }

  renderCode_4 = () => {
    return (
      `
      Let’s start off with the TimersDashboard component. 
      让我们从TimersDashboard组件开始
      Again, all of our React code for this chapter will be inside of the file public/app.js.
      同样，本章的所有React代码都在public/app.js文件中。
      We’ll begin by defining a familiar function, render():
      我们将首先定义一个熟悉的函数render():
      `
    );
  }

  renderCode_5 = () => {
    return `
    class TimersDashboard extends React.Component { 
      render() {
        return (
          <div className='ui three column centered grid'>
            <div className='column'>
              <EditableTimerList />
              <ToggleableTimerForm isOpen={true} />
            </div>
          </div>
        ); 
      }
    }

    This component renders its two child components nested under div tags.
      该组件由嵌套在div下的两个子组件EditableTimerList和ToggleableTimerForm构成
    TimersDashboard passes down one prop to ToggleableTimerForm: isOpen.
      TimersDashboard组件传递给ToggleableTimerForm组件一个props属性isOpen。
    This is used by the child component to determine whether to render a “+” or TimerForm.
    When ToggleableTimerForm is “open” the form is being displayed.
      用于决定子组件是否呈现“+”还是TimerForm组件。
    When ToggleableTimerForm is “open” the form is being displayed.
      当属性isOpen={true}时将显示ToggleableTimerForm组件
    `;
  }

  renderCode_6 = () => {
    return `
    As in the last chapter, don’t worry about the className attribute on the div tags. 
    This will ultimately define the class on HTML div elements and is purely for styling purposes.
      与上一章一样，不要担心div标记上的className属性。这最终将在HTML div元素上定义类，纯粹用于样式化目的。
    In this example, classes like ui three column centered grid all come from the CSS framework Semantic UI. 
    The framework is included in the head of index.html.
      在这个例子中，像ui three column centered grid 这样的类都来自CSS框架Semantic UI。该框架包含在index.html的头部。
    `;
  }

  renderCode_7 = () => {
    return `
    We will define EditableTimerList next. We’ll have it render two EditableTimer components. 
    One will end up rendering a timer’s face. The other will render a timer’s edit form:
      接下来我们将定义EditableTimerList。我们将渲染两个EditableTimer组件。一个将呈现一个定时器的面板。另一个将呈现一个定时器的编辑表单:
    `;
  }

  renderCode_8 = () => {
    return `
    class EditableTimerList extends React.Component { 
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
              title='Learn extreme ironing' project='World Domination' 
              elapsed='3890985' 
              runningSince={null} 
              editFormOpen={true}
            />
          </div>  
        );
      }
    }
    `;
  }

  render() {

    return (
      <div>
        <ReactMarkdown source='# 1.Reading....' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_1()} className="lang-js" />
        </div>

        <ReactMarkdown source='# page 89' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_2()} className="lang-js" />
        </div>

        <ReactMarkdown source='# page 90' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_3()}  className="lang-js"/>
        </div>
        <ReactMarkdown source='# Step 2: Build a static version of the app（步骤2:构建一个静态的版本的应用程序）' />
        <ReactMarkdown source='### TimersDashboard ' />
        <ReactMarkdown source={this.renderCode_4()} className="lang-js"/>

        <ReactMarkdown source='# page 91' />
        <ReactMarkdown source='### time_tracking_app/public/js/app-1.js ' />
        <ReactMarkdown source={this.renderCode_5()} className="lang-js"/>
        <ReactMarkdown source='### *info ' />
        <ReactMarkdown source={this.renderCode_6()} className="lang-js"/>
        <ReactMarkdown source={this.renderCode_7()} className="lang-js"/>
        <ReactMarkdown source='### time_tracking_app/public/js/app-1.js ' />
        <ReactMarkdown source={this.renderCode_8()} className="lang-js"/>
      </div>
    )
  }
}

export default Log_6;
