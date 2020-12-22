import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
// import fetch from "node-fetch";
// const base64 = require("js-base64").Base64;

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // posts 配下のファイル名を取得。
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // idを取得するためにファイル名から".md"を削除
    const id = fileName.replace(/\.md$/, "");

    // マークダウンファイルを解析
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 投稿のメタデータ解析のためにgray-matterを使う
    const matterResult = matter(fileContents);

    // データをidと合わせる
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // 投稿を日付でソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // const repoUrl =
  //   "https://api.github.com/repos/yuji-bvb/nextjs-blog/contents/posts";
  // const response = await fetch(repoUrl);
  // const files = await response.json();
  // const fileNames = files.map((file) => file.name);

  // 以下のような配列を返します
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // const repoUrl = `https://api.github.com/repos/yuji-bvb/nextjs-blog/contents/posts/${id}.md`;
  // const response = await fetch(repoUrl);
  // const file = await response.json();
  // const fileContents = base64.decode(file.content);

  // 投稿のメタデータ解析のためにgray-matterを使う
  const matterResult = matter(fileContents);

  // マークダウンをHTML文字列に変換するためにremarkを使う
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データをidと合わせる
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
