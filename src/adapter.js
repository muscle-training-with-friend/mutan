const BASE_URL = "https://mutan.azurewebsites.net";

/**
 * ユーザの確認・取得
 *
 * @param {{ token: string }} cx
 *
 * @returns {Promise<{ token: string }>}
 */
export async function getUser(cx) {
  const reply = await fetch(BASE_URL + "/get_user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * ユーザの生成
 *
 * @returns {Promise<{ token: string }>}
 */
export async function createUser() {
  const reply = await fetch(BASE_URL + "/create_user");
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * ユーザの削除
 *
 * @param {{ token: string }} cx
 */
export async function deleteUser(cx) {
  await fetch(BASE_URL + "/delete_user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
}

/**
 * すべてのタスクの取得
 *
 * @param {{ user_token: string }} cx
 *
 * @returns {Promise<{ 
 *   id: number,
 *   name: string,
 *   description: string?,
 *   training_instances: {
 *     id: number,
 *     training_id: number,
 *     name: string,
 *     description: string?,
 *     weight_value: f64,
 *     count_value: i32,
 *   }[],
 * }[]>}
 */
export async function getTasks(cx) {
  const reply = await fetch(BASE_URL + "/get_tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * 単体のタスクの取得
 *
 * @param {{ user_token: string, id: number }} cx
 *
 * @returns {Promise<{ 
 *   id: number,
 *   name: string,
 *   description: string?,
 *   training_instances: {
 *     id: number,
 *     training_id: number,
 *     name: string,
 *     description: string?,
 *     weight_value: f64,
 *     count_value: i32,
 *   }[],
 * }>}
 */
export async function getTask(cx) {
  const reply = await fetch(BASE_URL + "/get_task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * タスクの追加
 *
 * @param {{
 *   user_token: string,
 *   name: string,
 *   description: string?,
 *   training_instances: {
 *     training_id: number,
 *     weight_value: number,
 *     count_value: number,
 *   }[],
 * }} cx
 */
export async function createTask(cx) {
  await fetch(BASE_URL + "/create_task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
}

/**
 * タスクの削除
 *
 * @param {{ user_token: string, id: number }} cx
 */
export async function deleteTask(cx) {
  await fetch(BASE_URL + "/delete_task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
}

/**
 * すべての進行中のタスクの取得
 *
 * @param {{ user_token: string }} cx
 *
 * @returns {Promise<{ 
 *   id: number,
 *   task_id: number,
 *   name: string,
 *   description: string?,
 *   training_instances: {
 *     id: number,
 *     training_id: number,
 *     name: string,
 *     description: string?,
 *     weight_value: f64,
 *     count_value: i32,
 *   }[],
 * }[]>}
 */
export async function getTaskInstances(cx) {
  const reply = await fetch(BASE_URL + "/get_task_instances", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * 単体の進行中のタスクを取得
 * @param {{ user_token: string, id: number }} cx
 *
 * @returns {Promise<{
 *   id: number,
 *   task_id: number,
 *   name: string,
 *   description: string?,
 *   training_instances: {
 *     id: number,
 *     training_id: number,
 *     name: string,
 *     description: string?,
 *     weight_value: f64,
 *     count_value: i32,
 *   }[],
 * }>}
 */
export async function getTaskInstance(cx) {
  const reply = await fetch(BASE_URL + "/get_task_instance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * 進行中のタスクを追加
 *
 * @param {{ user_token: string, task_id: number }} cx
 */
export async function createTaskInstance(cx) {
  await fetch(BASE_URL + "/create_task_instance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  })
}

/**
 * 進行中のタスクを進行
 *
 * @param {{
 *   user_token: string,
 *   id: number,
 *   progress_value: number,
 * }} cx
 */
export async function proceedTaskInstance(cx) {
  await fetch(BASE_URL + "/proceed_task_instance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  })
}

/**
 * 進行中のタスクを削除
 *
 * @param {{
 *   user_token: string,
 *   id: number,
 * }} cx
 */
export async function deleteTaskInstance(cx) {
  await fetch(BASE_URL + "/delete_task_instance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
}

/**
 * すべてのトレーニングを取得
 *
 * @param {{ offset: number, size: number }} cx
 *
 * @returns {Promise<{
 *   id: number,
 *   name: string,
 *   description: string?,
 *   default_weight_value: number,
 *   default_count_value: number,
 * }>}
 */
export async function getTrainings(cx) {
  const reply = await fetch(BASE_URL + "/get_trainings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * 単体のトレーニングを取得
 *
 * @param {{ id: number }} cx
 *
 * @returns {Promise<{
 *   id: number,
 *   name: string,
 *   description: string?,
 *   default_weight_value: number,
 *   default_count_value: number,
 * }>}
 */
export async function getTraining(cx) {
  const reply = await fetch(BASE_URL + "/get_training", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx)
  });
  const json = await reply.json();

  console.log(json);
  return json;
}
