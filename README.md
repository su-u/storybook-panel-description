# Storybook Panel Description

- storybookのパネルにstoryの説明を記載できるアドオン
- 説明にはgfmに対応したmarkdownが使える。

## 例

```tsx
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
Primary.parameters = {
  desc: `
# TEST

- list
- list
`
}
```