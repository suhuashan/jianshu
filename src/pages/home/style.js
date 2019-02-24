import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 240px;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    margin-left: 18px;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid  #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        margin-right: 10px;
        width: 32px;
        height: 32px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;
export const WriterWrapper = styled.div`
    overflow: hidden;
    margin-bottom: 20px;
    width: 235px;
    padding-top: 20px;
    font-size: 13px;
    .title{
        font-size: 14px;
        line-height: 14px;
        color: #969696;
    }
    .author{
        float: left;
    }
    .spin{
        float: right;
    }
    .iconfont{
        font-size: 10px;
    }
`;
export const WriterItem = styled.div`
    margin-top: 20px;
    padding: 10px 0;
    width: 100%;
    height: 48px;
    color: #333;
    cursor: pointer;
    .writer-pic{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border-radius: 50%;
    }
    .desc{
        line-height: 24px;
    }
    .focus{
        float: right;
        font-size: 13px;
        color: #42c02e;
    }
    .record{
        font-size: 12px;
        color: #969696;
    }
`;  
export const LoadMoreWriter = styled.div`
    font-size: 13px;
    width: 100%;
    hieght: 40px;
    line-height: 40px;
    border: 1px solid #dcdcdc;
    background: #f7f7f7;
    color: #787878;
    border-radius: 4px;
    text-align: center;
    margin-top: 20px;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px #ccc solid;
    font-size: 14px;
`;