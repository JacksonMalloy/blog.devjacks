run `gatsby clean` after creation of markdown files

run `gatsby build` to index added markdown file to Algolia

<TabBar>
  {/* Tabs */}
  <StyledTabBar>
    <Tab tab="Blog">
      Blog
    </Tab>
    <Tab tab="About">
      About
    </Tab>
    <Tab tab="Contact">
      Contact
    </Tab>
  </StyledTabBar>
  {/* Panels */}
  <StyledTabPanel>
    <TabPanel onActive="Blog">
      <StyledBlogContainer>
        <StyledContent>
          <CustomHits />
          <Footer />
        </StyledContent>
      </StyledBlogContainer>
    </TabPanel>
    <TabPanel onActive="About">
      <StyledAboutContainer>
        <StyledGallery>
          <Timeline />
        </StyledGallery>
      </StyledAboutContainer>
    </TabPanel>
    <TabPanel onActive="Contact">
        <StyledContactTweetContainer>
          <StyledTweets>
            <Twitter />
          </StyledTweets>
          <StyledContact>
            <Contact />
          </StyledContact>
        </StyledContactTweetContainer>
    </TabPanel>
  </StyledTabPanel>
</TabBar>