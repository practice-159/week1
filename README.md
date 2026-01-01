<p>
  <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*poaGV4iICp06Q-yTlA2g_g.png" alt="React"/>

</p>

# 使用語言

React + TypeScript + Vite

## 把 App.tsx 易讀性變高

1. 把產品 data 額外拉出來變成一個 json檔
2. 把畫面左邊(所有產品)與右邊(單一產品介紹)獨立成 2 個 Component (Card.tsx / Table.tsx)
3. 加上 TypeScript 型別檢查

```ts
week1
-src
--components (放所有 Components)
---Card.tsx (左側 : 顯示所有產品)
---Table.tsx (右側 : 顯示選取的產品細項)
--App.tsx
--product.json (產品data)
```
