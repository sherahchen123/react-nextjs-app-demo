"use client";

import React, { useState } from "react";
import { metadata } from "./metadata";
import Image from "next/image";

export default function Subpage1() {
  const [activeTab, setActiveTab] = useState("home"); // 默认选项为首页

  return (
    <div style={styles.container}>
      {/* 上半部分内容 */}
      {activeTab === "home" && (
        <>
          <div style={styles.header}>
            <h1>今日新增 876 条话术</h1>
            <h2>输入TA说的话，获得满意回复</h2>
          </div>

          {/* 搜索框和按钮 */}
          <div style={styles.searchContainer}>
            <input type="text" placeholder="搜索" style={styles.searchInput} />
            <button style={styles.searchButton}>搜索</button>
          </div>

          {/* 可滑动按钮区域 */}
          <div style={styles.tabContainer}>
            {["看电影", "笑死我了", "表情包", "土味情话"].map((item) => (
              <div key={item} style={styles.tab}>
                <Image src={`/file.svg`} alt={item} style={styles.tabImage} width={40} height={40} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* 推荐案例 */}
          <div style={styles.recommendations}>
            <div style={styles.recommendationsHeader}>
              <h3>推荐案例</h3>
            </div>
            <div style={styles.recommendationList}>
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} style={styles.recommendationItem}>
                  <Image
                    src="/file.svg"
                    alt="示例"
                    style={styles.recommendationImage}
                    width={50}
                    height={50}
                  />
                  <div style={styles.recommendationText}>
                    <p>这个文案不忍直视随便打了，然后就完事了</p>
                    <span>10202</span>
                  </div>
                  <Image src="/window.svg" alt="图标" style={styles.icon} width={15} height={15} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {/* 底部 Tab 区域 */}
      <div style={styles.bottomTabContainer}>
        <div
          style={{
            ...styles.bottomTab,
            ...(activeTab === "home" ? styles.activeTabStyle : {}),
          }}
          onClick={() => setActiveTab("home")}
        >
          首页
        </div>
        <div
          style={{
            ...styles.bottomTab,
            ...(activeTab === "tutorial" ? styles.activeTabStyle : {}),
          }}
          onClick={() => setActiveTab("tutorial")}
        >
          教程
        </div>
        <div
          style={{
            ...styles.bottomTab,
            ...(activeTab === "dialog" ? styles.activeTabStyle : {}),
          }}
          onClick={() => setActiveTab("dialog")}
        >
          发现
        </div>
        <div
          style={{
            ...styles.bottomTab,
            ...(activeTab === "my" ? styles.activeTabStyle : {}),
          }}
          onClick={() => setActiveTab("my")}
        >
          我的
        </div>
      </div>
    </div>
  );
}

// CSS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "transparent",
  },
  header: {
    background: "transparent",
    padding: "20px",
    color: "white",
    textAlign: "center",
  },
  searchContainer: {
    display: "flex", // 使用 flexbox 布局
    alignItems: "center", // 垂直居中
    padding: "10px",
    textAlign: "center",
  },
  searchInput: {
    width: "80%", // 调整宽度
    padding: "12px",
    borderRadius: "20px 0 0 20px", // 圆角
    border: "1px solid #ccc",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  searchButton: {
    padding: "12px 20px",
    borderRadius: "0 20px 20px 0", // 圆角
    border: "1px solid #ccc",
    backgroundColor: "#6a5acd", // 按钮背景颜色
    color: "white",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    height: "50px",
    fontSize: "small",
  },
  tabContainer: {
    display: "flex",
    overflowX: "auto",
    padding: "10px",
    height: "280px",
  },
  tab: {
    width: '200px',
    // height: '260px',
    textAlign: 'center',
    marginLeft: '10px',
    background: 'white',
    borderRadius: "10px"
  },
  tabImage: {
    marginLeft: '18px',
    marginTop: '5px'
  },
  bottomTabContainer: {
    position: "fixed", // 固定在页面底部
    bottom: 40, // 距离底部0
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50px",
    backgroundColor: "#f0f0f0", // 背景颜色
  },
  bottomTab: {
    flex: 1,
    textAlign: "center",
    padding: "10px",
    cursor: "pointer",
  },
  recommendations: {
    padding: "10px",
    backgroundColor: "transparent",
    borderRadius: "10px",
    marginTop: "10px",
    marginBottom: "40px",
    flex: "1 1 auto",
    overflowY: "auto",
  },
  recommendationList: {
    display: "flex",
    flexDirection: "column",
  },
  recommendationItem: {
    padding: "10px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  recommendationImage: {
    width: "50px",
    height: "50px",
    borderRadius: "5px",
    marginRight: "10px",
  },
  icon: {
    marginTop: "50px",
    width: "15px",
    height: "15px",
  },
  backButtonContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  backButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#6a5acd",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  activeTabStyle: {
    backgroundColor: "#d3d3d3", // 加深的背景色
  },
  recommendationsHeader: {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 1,
  },
};
