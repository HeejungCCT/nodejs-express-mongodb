<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
                <table id="menuTable" class="indent">
                    <thead>
                        <tr>
                            <th colspan="4">Lotus Massage Menu</th>
                        </tr>
                        <tr>
                            <th>Item</th>
                            <th>Session</th>
                            <th>Price(€)</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/massagemenu/section">
                            <tr>
                                <td colspan="4">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                                <xsl:for-each select="type">
                            <tr id="{position()}">
                                <!-- <xsl:attribute name="pregnant">
                                    <xsl:value-of select="boolean(./@pregnant)" /> 
                                </xsl:attribute> -->
                                <td align="left" >
                                    <xsl:value-of select="item" />
                                </td>
                                <td align="left">
                                    <xsl:value-of select="session" />
                                </td>
                                <td align="right"> 
                                    <xsl:value-of select="price" />
                                </td>
                                <td align="center">
                                    <input name="item0" type="checkbox" />
                                </td>
                            </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table><br/>
    </xsl:template>
</xsl:stylesheet>