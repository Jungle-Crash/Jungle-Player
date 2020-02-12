import React from 'react';
import items from '../../items.json'
import {
  Form, Button, Checkbox
} from 'antd';

const CheckboxGroup = Checkbox.Group;

class ItemSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: items,
      checkedList: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.checkedList)
    this.props.submitItems('items', {items: this.state.checkedList})
    this.props.setWaiting()
  }

  handleChange = (checkedList) => {
    if (checkedList.length < 10) {
      this.setState({ checkedList })
    } else {
      console.log("Too many")
    }
  
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="submit-items-form">

          <h1>Select your items</h1>

          <Form.Item>
            <CheckboxGroup options={this.state.items} value={this.state.checkedList} onChange={this.handleChange} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-items-button">
              Submit Items
              </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'items' })(ItemSelect)


