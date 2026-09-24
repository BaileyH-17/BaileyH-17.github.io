import type { Project } from './site';
import { projects as zhProjects, profile as zhProfile } from './site';
export { skills } from './site';

export const profile = {
  ...zhProfile,
  role: 'Automation student · Edge AI',
  description: 'Automation undergraduate at Xi’an Jiaotong University, focused on edge AI deployment, inference optimization, and multimodal intelligent systems.'
};

const translations: Record<string, Partial<Project>> = {
  'edge-ai-deployment': {
    title: 'Edge AI Deployment Engineering Intern',
    summary: 'Contributed to an underwater biological recognition system across data curation, model training, edge quantization, deployment, and a local AI cluster.',
    bullets: ['Improved the training strategy and raised Top-1 accuracy from 79% to 85%.', 'Built an FP32 → ONNX → RKNN quantization pipeline with INT8 and mixed-precision support, then validated accuracy and throughput on an edge NPU board.', 'Implemented image pre- and post-processing in C/C++, improving FPS and memory usage on real hardware.', 'Built a K3s-based local AI platform integrating GPU runtime, shared storage, and batch scheduling.'],
    video: { webm:'/media/videos/edge-ai-identification.webm', mp4:'/media/videos/edge-ai-identification.mp4', poster:'/media/videos/edge-ai-identification-poster.webp', title:'Biological Recognition — Cloud Simulation', caption:'A cloud-side simulation of the biological recognition workflow and interaction.' },
    detailSections: [
      { title:'AI Recognition & Edge Deployment', summary:'Advanced a stable underwater video recognition pipeline from data and training to quantization and board-side validation.', points:['Built detection and classification baselines; improved training data through semi-automatic labeling, low-quality sample cleanup, and long-tail class supplementation.','Designed the video pipeline: detection, tracking, crop-based classification, and multi-frame aggregation, with quality scoring and stable-state control to reduce noisy predictions.','Completed ONNX → INT8 quantization; iterated on sensitive layers, activation anomalies, and calibration data, then validated accuracy, frame rate, and memory on an edge NPU.','Helped connect video decoding, inference, tracking, and classification on the board; documented cross-compilation, deployment tests, and performance debugging.'] },
      { title:'Local AI Cluster & Scheduling', summary:'Built a lightweight cluster for training and inference workloads, covering GPU, storage, backup, virtualization, and batch scheduling.', points:['Deployed a lightweight Kubernetes cluster with GPU runtime, private image pulls, shared storage mounts, and service migration.','Established incremental backup and recovery drills for hot data, with scheduled frequency, retention, and concurrency controls.','Enabled vGPU resource isolation so multiple containers can share GPU memory and compute; handled offline images, certificates, permissions, and heterogeneous nodes.','Configured queues, priorities, and preemption, migrated inference services to cluster workloads, and connected basic monitoring.'] }
    ]
  },
  'remote-sensing-segmentation': { title:'Remote-Sensing Video Segmentation', summary:'Built data, annotation, and multimodal inference workflows for spatiotemporal understanding and segmentation in remote-sensing videos.', bullets:['Curated drone and satellite video datasets and built a semi-automatic mask-labeling workflow.','Used vision-language models to generate semantic annotations and instruction-answer pairs for inference and segmentation.','Evaluated training-free, reinforcement-learning, and end-to-end video segmentation methods on a self-built dataset.'] },
  'tcm-llm': { title:'Traditional Chinese Medicine LLM Development', summary:'Worked on training data, inference acceleration, and domestic NPU adaptation for a traditional Chinese medicine knowledge system.', bullets:['Extracted symptoms, tongue features, and diagnoses from classical texts and medical textbooks to build a cleaned training corpus.','Accelerated inference on NVIDIA GPUs and adapted the model to a domestic NPU platform.','The project received a national award in an AI competition and its software system was registered.'] },
  'tto-microwave-source': { title:'High-Power Microwave Source Design (TTO)', summary:'Designed a wheel-shaped metamaterial slow-wave structure and used PIC simulation to optimize beam–wave energy exchange.', bullets:['Designed metamaterial unit cells and periodic electron channels for a magnetic-field-free transit-time oscillator.','Ran PIC simulations to study field distribution and beam–wave interaction, exploring compact high-power microwave sources.','The related paper was accepted by IEEE Transactions on Plasma Science; a patent application is under review.'] }
};

export const projects: Project[] = zhProjects.map((project) => ({ ...project, ...translations[project.slug] }));
