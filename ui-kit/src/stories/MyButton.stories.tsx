import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyButton from "../MyButton/MyButton";

export default {
    title: 'Example/MyButton',
    component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const RedBtn = Template.bind({});
RedBtn.args = {
    color: 'red',
    children: 'Text'
};

export const OrangeBtn = Template.bind({});
OrangeBtn.args = {
    color: 'orange',
    children: 'Text'
};

export const BigBtn = Template.bind({});
BigBtn.args = {
    color: 'orange',
    big: true,
    children: 'Text'
};