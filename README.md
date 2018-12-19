# Project overview

## Design
This site was designed using [Adobe XD](https://www.adobe.com/ca/products/xd.html), a wireframing tool for desktop and mobile layouts. I designed it to match my resume in font style, color, and general layout. The site itself uses design principles like the golden ratio, prominent CTAs, and an intuitive flow to guide the user.

## Implementation
This site was built using [React 16.0](https://reactjs.org/), and bootstrapped using the [create-react-app](https://www.npmjs.com/package/create-react-app) package. It uses several npm packages such as [react-router-dom](https://www.npmjs.com/package/react-router-dom), [react-sidebar](https://www.npmjs.com/package/react-sidebar), and [body-scroll-lock](https://www.npmjs.com/package/body-scroll-lock). [Bootstrap](https://getbootstrap.com/) was used for most styling, as well as media queries for responsive behavior. The site is hosted using [AWS S3](https://aws.amazon.com/s3/), using the [AWS Cloudfront CDN](https://aws.amazon.com/cloudfront/). The contact form is run using [AWS SES](https://aws.amazon.com/ses/), which is triggered by making an API call through the [AWS API Gateway](https://aws.amazon.com/api-gateway/) which runs an [AWS Lambda function](https://aws.amazon.com/lambda/). The site is secured with an SSL certificate.
