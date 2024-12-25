
# IOT-Hub-Embedded
![](attachments/IOT-Hub-Embedded.png)

## 介绍

**IoT-Hub-Embedded**是与**IoT-Hub-Node**相对应的开源硬件平台，我们设计了一系列通用硬件外设，包括继电器模块，环境监测模块网关等，可用于各种物联网应用场景，如智能家居、智能工厂和智能农业等。

IoT-Hub-Embedded中的硬件PCB均使用开源软件KICAD制作，并开源原理图。
## 特点

高度集成：IoT-Hub-Embedded的硬件模块集成了多种传感器、通信模块和处理器，使其能够直接与物理设备进行连接和交互。这样，开发人员可以更轻松地构建具有丰富功能的物联网设备。

低功耗：IoT-Hub-Embedded的硬件模块采用了节能设计，能够有效管理能源消耗，延长设备的电池寿命或降低能源成本。这对于需要长时间运行或使用电池供电的设备非常重要。

网络连接：IoT-Hub-Embedded的硬件模块支持多种网络连接方式，包括Wi-Fi、蓝牙、以太网等，使设备能够与物联网平台进行可靠的通信。同时，它还提供了安全的通信协议和加密机制，以确保数据的保密性和完整性。

可编程性：IoT-Hub-Embedded的硬件模块通过提供丰富的API和开发工具，使开发人员能够灵活地配置和定制设备功能。它支持多种编程语言和开发环境，使开发过程更加便捷。

扩展性：IoT-Hub-Embedded的硬件模块具有良好的扩展性，可以与其他硬件模块和传感器进行集成，以满足不同应用场景的需求。开发人员可以根据实际情况添加额外的功能或组件。

IoT-Hub-Embedded为物联网设备提供了可靠、高效的通用解决方案。它与IoT-Hub-Node平台相互配合，使开发人员能够轻松构建出功能强大、可靠的物网结合的项目。


## 现有成果

| 序号  | 项目名称            | 状态  | 详情链接                                                                             | 备注   |
| --- | --------------- | --- | -------------------------------------------------------------------------------- | ---- |
| 1   | ESP32智能控制终端     | 🚫  | [ESP32_CentralController](https://github.com/IOTHubNode/ESP32_CentralController) | 改为网关 |
| 2   | ESP32环境监测节点     | ⏳   | [ESP32_EnvNode](https://github.com/IOTHubNode/ESP32_EnvNode)                     |      |
| 3   | ESP32智能门锁       | ⏳   | [ESP32_DoorLock](https://github.com/IOTHubNode/ESP32_DoorLock)                   |      |
| 4   | ESP32网关         | ⏳   | [ESP32_Gateway](https://github.com/IOTHubNode/ESP32_RelayModule)                 |      |
| 5   | ESP32通用继电器模块    | ⏳   | [ESP32_RelayModule](https://github.com/IOTHubNode/ESP32_RelayModule)             |      |
| 6   | LoRa数据采集节点      | ⏳   | [LoRa_Node](https://github.com/IOTHubNode/LoRa_Node)                             |      |
| 7   | 智能工具柜控制器        | ⏳   | [ESP32_ToolboxDriver](https://github.com/IOTHubNode/ESP32_ToolboxDriver)<br>     |      |
| 8   | 智能通断控制器         | ❓   | [ESP32_OnOffController](https://github.com/IOTHubNode/ESP32_OnOffController)     |      |
| 9   | 基于ESP32-C3的按键模块 | ⏳   | [ESP32_Button](https://github.com/IOTHubNode/ESP32_Button)<br>                   |      |

### 图示含义 

| 图标  | 含义    |
| --- | ----- |
| ⏳   | 进行中状态 |
| ✅   | 完成状态  |
| 🚫  | 取消状态  |
| ❓   | 待定状态  |
