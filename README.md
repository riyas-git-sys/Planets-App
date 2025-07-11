In this project, let's build a **Planets App** by applying the concepts we have learned till now.

## --> [For Demo](https://riyplanetnames.ccbp.tech/) Click Here 

### Refer to the video below:

<br/>
<div style="text-align: center;">
  <video style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/planets-app-output.mp4" type="video/mp4">
  </video>
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/planets-app-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- `planetsList` should be displayed using **React Slick**
- The `PlanetsSlider` component receives the `planetsList` as a prop. It consists of a list of planet objects with the following properties in each planet object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |     id      |  String   |
  |    name     |  String   |
  |  imageUrl   |  String   |
  | description |  String   |

- When the next button is clicked on the page, the next planet details in the `planetsList` should be displayed
- When the previous button is clicked on the page, the previous planet details in the `planetsList` should be displayed

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/planets-app-keys-breakdown.png" alt="planets keys breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/planets-app-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/PlanetsSlider/index.js`
- `src/components/PlanetsSlider/index.css`
- `src/components/PlanetItem/index.js`
- `src/components/PlanetItem/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

- To build this project, take a look at the <a href='https://learning.ccbp.in/frontend-development/course?c_id=2f4192f7-7495-49ca-a6ce-6b74005e25f1&s_id=c1dc8b6e-864b-4417-9767-471b9e745405&t_id=416f0cab-8425-413b-9157-c7b4d4ae4467' target="_blank">React Slick</a> reading material

**The following instructions are required for the tests to pass**

- The planets should have the alt as the value of the key `name` from planet objects in the `planetsList`
- The app should consist of an HTML container element with `data-testid` as `planets`

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png](https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png) planets background image

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #05acff; width: 150px; padding: 10px; color: black">Hex: #05acff</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
