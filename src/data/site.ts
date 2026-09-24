export const profile = {
  name: 'Bailey Huang', chineseName: '黄宝莹', role: 'Automation student · Edge AI',
  description: '西安交通大学自动化专业本科生，专注于端侧 AI 部署、模型推理优化与多模态智能系统。',
  email: 'baileyhstu@gmail.com', phone: '15302209025', github: 'https://github.com/BaileyH-17'
};
export const skills = ['Python','C / C++','Linux','Astro','PyTorch','RKNN-Toolkit2','ONNX','vLLM','NPU','K3s','Hami','Volcano','CST Studio'];
export type Project = { slug:string; title:string; eyebrow:string; date:string; summary:string; tags:string[]; bullets:string[] };
export const projects: Project[] = [
  { slug:'edge-ai-deployment', title:'端侧 AI 部署工程师实习', eyebrow:'ArexVision · Shenzhen', date:'2026.06 — 2026.09', summary:'面向海洋生物检测与分类场景，完成从模型训练策略、量化编译到边缘板部署和结果展示的完整链路。', tags:['Edge AI','RKNN','C / C++','K3s','INT8'], bullets:['通过重构训练策略将 Top-1 准确率从 79% 提升至 85%。','使用 RKNN-Toolkit2 构建 FP32 → ONNX → RKNN 量化流程，支持 INT8 与混合精度，并在 RV1126B 边缘板验证准确率与推理速度。','使用 C/C++ 实现图像预处理与后处理（含 NMS），优化真实硬件上的 FPS 与内存占用。','搭建基于 K3s 的本地 AI 平台，集成 2 × RTX 5090D、TrueNAS NFS、NVIDIA Container Runtime 与 Volcano vGPU 调度。'] },
  { slug:'remote-sensing-segmentation', title:'遥感视频推理分割', eyebrow:'Research project · Multimodal vision', date:'2026.01 — 至今', summary:'围绕遥感视频的时空理解与分割，构建数据治理、语义标注和端到端多模态推理流程。', tags:['SAM3','Gemini / GPT','Video MLLM','Data Pipeline'], bullets:['筛选无人机与卫星遥感视频数据集，引入 SAM3 搭建半自动掩码标注流。','利用 Gemini、GPT 等大语言模型生成语义标注，构建“推理-分割”指令问答对。','在自建数据集上评估免训练、强化学习和端到端等多类视频分割方法。'] },
  { slug:'tcm-llm', title:'中医大模型算法开发', eyebrow:'Research project · LLM inference', date:'2025.03 — 2025.11', summary:'面向中医知识场景，负责训练数据构建、模型推理加速与国产 NPU 适配。', tags:['Python','vLLM','NPU','LLM'], bullets:['从古籍与医学教材中抽取症状、舌象和病名，完成数据清洗并构建高质量中医训练集。','使用 vLLM 在 NVIDIA GPU 上加速推理，并将模型部署至华为昇腾 NPU。','获第十九届“挑战杯”全国大学生课外学术科技竞赛人工智能赛道国家级一等奖；相关系统获软件著作权。'] },
  { slug:'tto-microwave-source', title:'高功率微波源设计（TTO）', eyebrow:'Research project · Electromagnetic simulation', date:'2025.09 — 2026.01', summary:'设计轮式超材料慢波结构，使用 PIC 仿真优化束波能量交换，探索高功率微波源小型化。', tags:['CST Studio','PIC Simulation','Metamaterial','IEEE TPS'], bullets:['独立设计轮式超材料单元结构与周期性电子通道，构建无磁场渡越时间振荡器。','使用 CST Particle Studio 开展 PIC 仿真，获得 80% 电子效率和 1.03 GW 输出功率。','论文已被 IEEE Transactions on Plasma Science 接收；相关专利正在审查。'] }
];
