import React, { PureComponent } from 'react';
import { Row, Col, Icon, Tag } from 'antd';

import styles from './ArticleCard.module.less';

const tagColors = ['magenta', 'green', 'volcano', 'cyan', 'red', 'orange', 'gold', 'lime'];

class ArticleCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { 
      url = 'https://tech.meituan.com/2019/03/14/litho-use-and-principle-analysis.html',
      title = '基本功 | Litho的使用及原理剖析',
      date = '2019年03月14日',
      authors = `少宽 张颖`,
      content = 'Litho是Facebook推出的一套高效构建Android UI的声明式框架，主要目的是提升RecyclerView复杂列表的滑动性能和降低内存占用。',
      tags = ['前端', 'Javascrip', 'React', 'SpaceBox'],
    } = this.props;
    return (
      <Row className={styles['article-container']}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h2 className={styles['article-title']}>
            <a href={url} rel="bookmark">{title}</a>
          </h2>
          <div className={styles['article-meta']}>
            <span className={styles['meta-date']}>
              <Icon type="calendar" className={styles['meta-icon']} />{date}
            </span>
            <span>{authors}</span>
          </div>
          <div className={`${styles['article-content']}`}>
            {content}
            <a href={url}>阅读全文</a>
          </div>
          <div className={styles['article-tag']}>
            {tags.map((v, i) => <Tag key={`_${i}`} color={tagColors[i]}>{v}</Tag>)}
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h2 className={styles['article-title']}>
            <a href={url} rel="bookmark">{title}</a>
          </h2>
          <div className={styles['article-meta']}>
            <span className={styles['meta-date']}>
              <Icon type="calendar" className={styles['meta-icon']} />{date}
            </span>
            <span>{authors}</span>
          </div>
          <div className={`${styles['article-content']}`}>
            {content}
            <a href={url}>阅读全文</a>
          </div>
          <div className={styles['article-tag']}>
            {tags.map((v, i) => <Tag key={`_${i}`} color={tagColors[i]}>{v}</Tag>)}
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h2 className={styles['article-title']}>
            <a href={url} rel="bookmark">{title}</a>
          </h2>
          <div className={styles['article-meta']}>
            <span className={styles['meta-date']}>
              <Icon type="calendar" className={styles['meta-icon']} />{date}
            </span>
            <span>{authors}</span>
          </div>
          <div className={`${styles['article-content']}`}>
            {content}
            <a href={url}>阅读全文</a>
          </div>
          <div className={styles['article-tag']}>
            {tags.map((v, i) => <Tag key={`_${i}`} color={tagColors[i]}>{v}</Tag>)}
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h2 className={styles['article-title']}>
            <a href={url} rel="bookmark">{title}</a>
          </h2>
          <div className={styles['article-meta']}>
            <span className={styles['meta-date']}>
              <Icon type="calendar" className={styles['meta-icon']} />{date}
            </span>
            <span>{authors}</span>
          </div>
          <div className={`${styles['article-content']}`}>
            {content}
            <a href={url}>阅读全文</a>
          </div>
          <div className={styles['article-tag']}>
            {tags.map((v, i) => <Tag key={`_${i}`} color={tagColors[i]}>{v}</Tag>)}
          </div>
        </Col>
      </Row>
    )
  }
}

export default ArticleCard;